import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateOrConnectWithoutPayment_methodInput } from "../inputs/PluginCreateOrConnectWithoutPayment_methodInput";
import { PluginCreateWithoutPayment_methodInput } from "../inputs/PluginCreateWithoutPayment_methodInput";
import { PluginUpdateToOneWithWhereWithoutPayment_methodInput } from "../inputs/PluginUpdateToOneWithWhereWithoutPayment_methodInput";
import { PluginUpsertWithoutPayment_methodInput } from "../inputs/PluginUpsertWithoutPayment_methodInput";
import { PluginWhereInput } from "../inputs/PluginWhereInput";
import { PluginWhereUniqueInput } from "../inputs/PluginWhereUniqueInput";

@TypeGraphQL.InputType("PluginUpdateOneWithoutPayment_methodNestedInput", {})
export class PluginUpdateOneWithoutPayment_methodNestedInput {
  @TypeGraphQL.Field(_type => PluginCreateWithoutPayment_methodInput, {
    nullable: true
  })
  create?: PluginCreateWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => PluginCreateOrConnectWithoutPayment_methodInput, {
    nullable: true
  })
  connectOrCreate?: PluginCreateOrConnectWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpsertWithoutPayment_methodInput, {
    nullable: true
  })
  upsert?: PluginUpsertWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  disconnect?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  delete?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: true
  })
  connect?: PluginWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpdateToOneWithWhereWithoutPayment_methodInput, {
    nullable: true
  })
  update?: PluginUpdateToOneWithWhereWithoutPayment_methodInput | undefined;
}
