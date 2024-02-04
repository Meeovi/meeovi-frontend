import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyOrderInputEnvelope } from "../inputs/Order_line_itemCreateManyOrderInputEnvelope";
import { Order_line_itemCreateOrConnectWithoutOrderInput } from "../inputs/Order_line_itemCreateOrConnectWithoutOrderInput";
import { Order_line_itemCreateWithoutOrderInput } from "../inputs/Order_line_itemCreateWithoutOrderInput";
import { Order_line_itemScalarWhereInput } from "../inputs/Order_line_itemScalarWhereInput";
import { Order_line_itemUpdateManyWithWhereWithoutOrderInput } from "../inputs/Order_line_itemUpdateManyWithWhereWithoutOrderInput";
import { Order_line_itemUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/Order_line_itemUpdateWithWhereUniqueWithoutOrderInput";
import { Order_line_itemUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/Order_line_itemUpsertWithWhereUniqueWithoutOrderInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpdateManyWithoutOrderNestedInput", {})
export class Order_line_itemUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: Order_line_itemUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_itemCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  set?: Order_line_itemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_line_itemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_line_itemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: Order_line_itemUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: Order_line_itemUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_line_itemScalarWhereInput[] | undefined;
}
