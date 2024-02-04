import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadCreateManyMediaInputEnvelope } from "../inputs/Order_line_item_downloadCreateManyMediaInputEnvelope";
import { Order_line_item_downloadCreateOrConnectWithoutMediaInput } from "../inputs/Order_line_item_downloadCreateOrConnectWithoutMediaInput";
import { Order_line_item_downloadCreateWithoutMediaInput } from "../inputs/Order_line_item_downloadCreateWithoutMediaInput";
import { Order_line_item_downloadScalarWhereInput } from "../inputs/Order_line_item_downloadScalarWhereInput";
import { Order_line_item_downloadUpdateManyWithWhereWithoutMediaInput } from "../inputs/Order_line_item_downloadUpdateManyWithWhereWithoutMediaInput";
import { Order_line_item_downloadUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Order_line_item_downloadUpdateWithWhereUniqueWithoutMediaInput";
import { Order_line_item_downloadUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Order_line_item_downloadUpsertWithWhereUniqueWithoutMediaInput";
import { Order_line_item_downloadWhereUniqueInput } from "../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_item_downloadUpdateManyWithoutMediaNestedInput", {})
export class Order_line_item_downloadUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Order_line_item_downloadCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_item_downloadCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Order_line_item_downloadUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_item_downloadCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  set?: Order_line_item_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_line_item_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_line_item_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_item_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Order_line_item_downloadUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Order_line_item_downloadUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_line_item_downloadScalarWhereInput[] | undefined;
}
