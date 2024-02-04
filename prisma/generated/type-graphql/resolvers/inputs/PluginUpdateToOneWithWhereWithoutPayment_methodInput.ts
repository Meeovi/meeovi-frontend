import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginUpdateWithoutPayment_methodInput } from "../inputs/PluginUpdateWithoutPayment_methodInput";
import { PluginWhereInput } from "../inputs/PluginWhereInput";

@TypeGraphQL.InputType("PluginUpdateToOneWithWhereWithoutPayment_methodInput", {})
export class PluginUpdateToOneWithWhereWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpdateWithoutPayment_methodInput, {
    nullable: false
  })
  data!: PluginUpdateWithoutPayment_methodInput;
}
