import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateManyAppInputEnvelope } from "../inputs/App_shipping_methodCreateManyAppInputEnvelope";
import { App_shipping_methodCreateOrConnectWithoutAppInput } from "../inputs/App_shipping_methodCreateOrConnectWithoutAppInput";
import { App_shipping_methodCreateWithoutAppInput } from "../inputs/App_shipping_methodCreateWithoutAppInput";
import { App_shipping_methodScalarWhereInput } from "../inputs/App_shipping_methodScalarWhereInput";
import { App_shipping_methodUpdateManyWithWhereWithoutAppInput } from "../inputs/App_shipping_methodUpdateManyWithWhereWithoutAppInput";
import { App_shipping_methodUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_shipping_methodUpdateWithWhereUniqueWithoutAppInput";
import { App_shipping_methodUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_shipping_methodUpsertWithWhereUniqueWithoutAppInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodUpdateManyWithoutAppNestedInput", {})
export class App_shipping_methodUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_shipping_methodCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_shipping_methodCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_shipping_methodCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_shipping_methodUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_shipping_methodCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  set?: App_shipping_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_shipping_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  delete?: App_shipping_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: App_shipping_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_shipping_methodUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_shipping_methodUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_shipping_methodScalarWhereInput[] | undefined;
}
