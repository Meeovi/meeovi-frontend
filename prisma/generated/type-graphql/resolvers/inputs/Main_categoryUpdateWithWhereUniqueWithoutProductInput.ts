import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryUpdateWithoutProductInput } from "../inputs/Main_categoryUpdateWithoutProductInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryUpdateWithWhereUniqueWithoutProductInput", {})
export class Main_categoryUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Main_categoryUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Main_categoryUpdateWithoutProductInput;
}
