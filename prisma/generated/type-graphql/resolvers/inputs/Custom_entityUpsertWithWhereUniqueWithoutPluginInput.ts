import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateWithoutPluginInput } from "../inputs/Custom_entityCreateWithoutPluginInput";
import { Custom_entityUpdateWithoutPluginInput } from "../inputs/Custom_entityUpdateWithoutPluginInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityUpsertWithWhereUniqueWithoutPluginInput", {})
export class Custom_entityUpsertWithWhereUniqueWithoutPluginInput {
  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_entityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_entityUpdateWithoutPluginInput, {
    nullable: false
  })
  update!: Custom_entityUpdateWithoutPluginInput;

  @TypeGraphQL.Field(_type => Custom_entityCreateWithoutPluginInput, {
    nullable: false
  })
  create!: Custom_entityCreateWithoutPluginInput;
}
