import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateManyCustomerInputEnvelope } from "../inputs/Order_customerCreateManyCustomerInputEnvelope";
import { Order_customerCreateOrConnectWithoutCustomerInput } from "../inputs/Order_customerCreateOrConnectWithoutCustomerInput";
import { Order_customerCreateWithoutCustomerInput } from "../inputs/Order_customerCreateWithoutCustomerInput";
import { Order_customerScalarWhereInput } from "../inputs/Order_customerScalarWhereInput";
import { Order_customerUpdateManyWithWhereWithoutCustomerInput } from "../inputs/Order_customerUpdateManyWithWhereWithoutCustomerInput";
import { Order_customerUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/Order_customerUpdateWithWhereUniqueWithoutCustomerInput";
import { Order_customerUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/Order_customerUpsertWithWhereUniqueWithoutCustomerInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerUpdateManyWithoutCustomerNestedInput", {})
export class Order_customerUpdateManyWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => [Order_customerCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Order_customerCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Order_customerCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: Order_customerUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_customerCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Order_customerCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  set?: Order_customerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_customerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_customerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_customerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: Order_customerUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: Order_customerUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_customerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_customerScalarWhereInput[] | undefined;
}
