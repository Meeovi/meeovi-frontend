import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadCreateManyMediaInputEnvelope } from "../inputs/Order_line_item_downloadCreateManyMediaInputEnvelope";
import { Order_line_item_downloadCreateOrConnectWithoutMediaInput } from "../inputs/Order_line_item_downloadCreateOrConnectWithoutMediaInput";
import { Order_line_item_downloadCreateWithoutMediaInput } from "../inputs/Order_line_item_downloadCreateWithoutMediaInput";
import { Order_line_item_downloadWhereUniqueInput } from "../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_item_downloadCreateNestedManyWithoutMediaInput", {})
export class Order_line_item_downloadCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Order_line_item_downloadCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_item_downloadCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_item_downloadCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_item_downloadWhereUniqueInput[] | undefined;
}
