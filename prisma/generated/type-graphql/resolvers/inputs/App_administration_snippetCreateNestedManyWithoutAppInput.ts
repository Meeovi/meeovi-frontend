import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateManyAppInputEnvelope } from "../inputs/App_administration_snippetCreateManyAppInputEnvelope";
import { App_administration_snippetCreateOrConnectWithoutAppInput } from "../inputs/App_administration_snippetCreateOrConnectWithoutAppInput";
import { App_administration_snippetCreateWithoutAppInput } from "../inputs/App_administration_snippetCreateWithoutAppInput";
import { App_administration_snippetWhereUniqueInput } from "../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.InputType("App_administration_snippetCreateNestedManyWithoutAppInput", {})
export class App_administration_snippetCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_administration_snippetCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_administration_snippetCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_administration_snippetCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_administration_snippetCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetWhereUniqueInput], {
    nullable: true
  })
  connect?: App_administration_snippetWhereUniqueInput[] | undefined;
}
