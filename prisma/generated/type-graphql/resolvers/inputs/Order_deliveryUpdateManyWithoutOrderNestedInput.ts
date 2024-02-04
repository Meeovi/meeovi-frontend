import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateManyOrderInputEnvelope } from "../inputs/Order_deliveryCreateManyOrderInputEnvelope";
import { Order_deliveryCreateOrConnectWithoutOrderInput } from "../inputs/Order_deliveryCreateOrConnectWithoutOrderInput";
import { Order_deliveryCreateWithoutOrderInput } from "../inputs/Order_deliveryCreateWithoutOrderInput";
import { Order_deliveryScalarWhereInput } from "../inputs/Order_deliveryScalarWhereInput";
import { Order_deliveryUpdateManyWithWhereWithoutOrderInput } from "../inputs/Order_deliveryUpdateManyWithWhereWithoutOrderInput";
import { Order_deliveryUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/Order_deliveryUpdateWithWhereUniqueWithoutOrderInput";
import { Order_deliveryUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/Order_deliveryUpsertWithWhereUniqueWithoutOrderInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryUpdateManyWithoutOrderNestedInput", {})
export class Order_deliveryUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_deliveryCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_deliveryCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: Order_deliveryUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_deliveryCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  set?: Order_deliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_deliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_deliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_deliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: Order_deliveryUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: Order_deliveryUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_deliveryScalarWhereInput[] | undefined;
}
