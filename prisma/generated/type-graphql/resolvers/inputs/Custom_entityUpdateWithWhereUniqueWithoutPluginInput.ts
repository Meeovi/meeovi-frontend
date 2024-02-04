import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityUpdateWithoutPluginInput } from "../inputs/Custom_entityUpdateWithoutPluginInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityUpdateWithWhereUniqueWithoutPluginInput", {})
export class Custom_entityUpdateWithWhereUniqueWithoutPluginInput {
  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_entityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_entityUpdateWithoutPluginInput, {
    nullable: false
  })
  data!: Custom_entityUpdateWithoutPluginInput;
}
