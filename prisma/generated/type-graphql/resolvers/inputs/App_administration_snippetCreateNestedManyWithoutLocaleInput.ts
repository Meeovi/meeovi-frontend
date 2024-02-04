import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateManyLocaleInputEnvelope } from "../inputs/App_administration_snippetCreateManyLocaleInputEnvelope";
import { App_administration_snippetCreateOrConnectWithoutLocaleInput } from "../inputs/App_administration_snippetCreateOrConnectWithoutLocaleInput";
import { App_administration_snippetCreateWithoutLocaleInput } from "../inputs/App_administration_snippetCreateWithoutLocaleInput";
import { App_administration_snippetWhereUniqueInput } from "../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.InputType("App_administration_snippetCreateNestedManyWithoutLocaleInput", {})
export class App_administration_snippetCreateNestedManyWithoutLocaleInput {
  @TypeGraphQL.Field(_type => [App_administration_snippetCreateWithoutLocaleInput], {
    nullable: true
  })
  create?: App_administration_snippetCreateWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetCreateOrConnectWithoutLocaleInput], {
    nullable: true
  })
  connectOrCreate?: App_administration_snippetCreateOrConnectWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetCreateManyLocaleInputEnvelope, {
    nullable: true
  })
  createMany?: App_administration_snippetCreateManyLocaleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetWhereUniqueInput], {
    nullable: true
  })
  connect?: App_administration_snippetWhereUniqueInput[] | undefined;
}
