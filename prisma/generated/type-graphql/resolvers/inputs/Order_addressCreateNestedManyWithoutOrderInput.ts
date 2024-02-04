import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateManyOrderInputEnvelope } from "../inputs/Order_addressCreateManyOrderInputEnvelope";
import { Order_addressCreateOrConnectWithoutOrderInput } from "../inputs/Order_addressCreateOrConnectWithoutOrderInput";
import { Order_addressCreateWithoutOrderInput } from "../inputs/Order_addressCreateWithoutOrderInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateNestedManyWithoutOrderInput", {})
export class Order_addressCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [Order_addressCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_addressCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_addressCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_addressCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_addressWhereUniqueInput[] | undefined;
}
