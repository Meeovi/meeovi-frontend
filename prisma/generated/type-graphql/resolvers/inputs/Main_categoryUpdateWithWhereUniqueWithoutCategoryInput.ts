import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryUpdateWithoutCategoryInput } from "../inputs/Main_categoryUpdateWithoutCategoryInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryUpdateWithWhereUniqueWithoutCategoryInput", {})
export class Main_categoryUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Main_categoryUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: Main_categoryUpdateWithoutCategoryInput;
}
