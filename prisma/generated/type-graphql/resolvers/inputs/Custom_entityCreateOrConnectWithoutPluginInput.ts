import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateWithoutPluginInput } from "../inputs/Custom_entityCreateWithoutPluginInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityCreateOrConnectWithoutPluginInput", {})
export class Custom_entityCreateOrConnectWithoutPluginInput {
  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_entityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_entityCreateWithoutPluginInput, {
    nullable: false
  })
  create!: Custom_entityCreateWithoutPluginInput;
}
