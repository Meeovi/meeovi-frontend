import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateWithoutProductInput } from "../inputs/Main_categoryCreateWithoutProductInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryCreateOrConnectWithoutProductInput", {})
export class Main_categoryCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Main_categoryCreateWithoutProductInput, {
    nullable: false
  })
  create!: Main_categoryCreateWithoutProductInput;
}
