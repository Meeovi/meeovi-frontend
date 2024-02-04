import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_administration_snippetInput } from "../inputs/AppCreateWithoutApp_administration_snippetInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutApp_administration_snippetInput", {})
export class AppCreateOrConnectWithoutApp_administration_snippetInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_administration_snippetInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_administration_snippetInput;
}
