import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_administration_snippetInput } from "../inputs/AppCreateOrConnectWithoutApp_administration_snippetInput";
import { AppCreateWithoutApp_administration_snippetInput } from "../inputs/AppCreateWithoutApp_administration_snippetInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutApp_administration_snippetInput", {})
export class AppCreateNestedOneWithoutApp_administration_snippetInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_administration_snippetInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_administration_snippetInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
