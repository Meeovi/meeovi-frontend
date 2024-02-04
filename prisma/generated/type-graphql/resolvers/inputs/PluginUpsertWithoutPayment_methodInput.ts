import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateWithoutPayment_methodInput } from "../inputs/PluginCreateWithoutPayment_methodInput";
import { PluginUpdateWithoutPayment_methodInput } from "../inputs/PluginUpdateWithoutPayment_methodInput";
import { PluginWhereInput } from "../inputs/PluginWhereInput";

@TypeGraphQL.InputType("PluginUpsertWithoutPayment_methodInput", {})
export class PluginUpsertWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => PluginUpdateWithoutPayment_methodInput, {
    nullable: false
  })
  update!: PluginUpdateWithoutPayment_methodInput;

  @TypeGraphQL.Field(_type => PluginCreateWithoutPayment_methodInput, {
    nullable: false
  })
  create!: PluginCreateWithoutPayment_methodInput;

  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;
}
