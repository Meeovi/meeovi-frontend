import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_order_extensionCreateManyOrderInputEnvelope } from "../inputs/Klarna_order_extensionCreateManyOrderInputEnvelope";
import { Klarna_order_extensionCreateOrConnectWithoutOrderInput } from "../inputs/Klarna_order_extensionCreateOrConnectWithoutOrderInput";
import { Klarna_order_extensionCreateWithoutOrderInput } from "../inputs/Klarna_order_extensionCreateWithoutOrderInput";
import { Klarna_order_extensionScalarWhereInput } from "../inputs/Klarna_order_extensionScalarWhereInput";
import { Klarna_order_extensionUpdateManyWithWhereWithoutOrderInput } from "../inputs/Klarna_order_extensionUpdateManyWithWhereWithoutOrderInput";
import { Klarna_order_extensionUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/Klarna_order_extensionUpdateWithWhereUniqueWithoutOrderInput";
import { Klarna_order_extensionUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/Klarna_order_extensionUpsertWithWhereUniqueWithoutOrderInput";
import { Klarna_order_extensionWhereUniqueInput } from "../inputs/Klarna_order_extensionWhereUniqueInput";

@TypeGraphQL.InputType("Klarna_order_extensionUpdateManyWithoutOrderNestedInput", {})
export class Klarna_order_extensionUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [Klarna_order_extensionCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Klarna_order_extensionCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Klarna_order_extensionCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: Klarna_order_extensionUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Klarna_order_extensionCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionWhereUniqueInput], {
    nullable: true
  })
  set?: Klarna_order_extensionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Klarna_order_extensionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionWhereUniqueInput], {
    nullable: true
  })
  delete?: Klarna_order_extensionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionWhereUniqueInput], {
    nullable: true
  })
  connect?: Klarna_order_extensionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: Klarna_order_extensionUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: Klarna_order_extensionUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_order_extensionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Klarna_order_extensionScalarWhereInput[] | undefined;
}
