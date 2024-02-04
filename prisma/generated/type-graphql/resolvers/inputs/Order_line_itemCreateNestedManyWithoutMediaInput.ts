import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyMediaInputEnvelope } from "../inputs/Order_line_itemCreateManyMediaInputEnvelope";
import { Order_line_itemCreateOrConnectWithoutMediaInput } from "../inputs/Order_line_itemCreateOrConnectWithoutMediaInput";
import { Order_line_itemCreateWithoutMediaInput } from "../inputs/Order_line_itemCreateWithoutMediaInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemCreateNestedManyWithoutMediaInput", {})
export class Order_line_itemCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_itemCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput[] | undefined;
}
