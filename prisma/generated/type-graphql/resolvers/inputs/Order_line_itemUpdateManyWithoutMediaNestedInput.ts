import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyMediaInputEnvelope } from "../inputs/Order_line_itemCreateManyMediaInputEnvelope";
import { Order_line_itemCreateOrConnectWithoutMediaInput } from "../inputs/Order_line_itemCreateOrConnectWithoutMediaInput";
import { Order_line_itemCreateWithoutMediaInput } from "../inputs/Order_line_itemCreateWithoutMediaInput";
import { Order_line_itemScalarWhereInput } from "../inputs/Order_line_itemScalarWhereInput";
import { Order_line_itemUpdateManyWithWhereWithoutMediaInput } from "../inputs/Order_line_itemUpdateManyWithWhereWithoutMediaInput";
import { Order_line_itemUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Order_line_itemUpdateWithWhereUniqueWithoutMediaInput";
import { Order_line_itemUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Order_line_itemUpsertWithWhereUniqueWithoutMediaInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpdateManyWithoutMediaNestedInput", {})
export class Order_line_itemUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Order_line_itemUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_itemCreateManyMediaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Order_line_itemUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Order_line_itemUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_line_itemScalarWhereInput[] | undefined;
}
