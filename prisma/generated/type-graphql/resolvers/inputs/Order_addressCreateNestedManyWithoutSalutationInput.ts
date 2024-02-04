import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateManySalutationInputEnvelope } from "../inputs/Order_addressCreateManySalutationInputEnvelope";
import { Order_addressCreateOrConnectWithoutSalutationInput } from "../inputs/Order_addressCreateOrConnectWithoutSalutationInput";
import { Order_addressCreateWithoutSalutationInput } from "../inputs/Order_addressCreateWithoutSalutationInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateNestedManyWithoutSalutationInput", {})
export class Order_addressCreateNestedManyWithoutSalutationInput {
  @TypeGraphQL.Field(_type => [Order_addressCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: Order_addressCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: Order_addressCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: Order_addressCreateManySalutationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_addressWhereUniqueInput[] | undefined;
}
