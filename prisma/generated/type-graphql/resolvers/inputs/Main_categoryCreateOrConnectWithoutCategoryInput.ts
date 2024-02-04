import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateWithoutCategoryInput } from "../inputs/Main_categoryCreateWithoutCategoryInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryCreateOrConnectWithoutCategoryInput", {})
export class Main_categoryCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Main_categoryCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Main_categoryCreateWithoutCategoryInput;
}
