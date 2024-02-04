import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateManySalutationInputEnvelope } from "../inputs/Order_customerCreateManySalutationInputEnvelope";
import { Order_customerCreateOrConnectWithoutSalutationInput } from "../inputs/Order_customerCreateOrConnectWithoutSalutationInput";
import { Order_customerCreateWithoutSalutationInput } from "../inputs/Order_customerCreateWithoutSalutationInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerCreateNestedManyWithoutSalutationInput", {})
export class Order_customerCreateNestedManyWithoutSalutationInput {
  @TypeGraphQL.Field(_type => [Order_customerCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: Order_customerCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: Order_customerCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_customerCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: Order_customerCreateManySalutationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_customerWhereUniqueInput[] | undefined;
}
