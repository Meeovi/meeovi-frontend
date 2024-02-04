import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateManyCustomerInputEnvelope } from "../inputs/Customer_wishlistCreateManyCustomerInputEnvelope";
import { Customer_wishlistCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_wishlistCreateOrConnectWithoutCustomerInput";
import { Customer_wishlistCreateWithoutCustomerInput } from "../inputs/Customer_wishlistCreateWithoutCustomerInput";
import { Customer_wishlistScalarWhereInput } from "../inputs/Customer_wishlistScalarWhereInput";
import { Customer_wishlistUpdateManyWithWhereWithoutCustomerInput } from "../inputs/Customer_wishlistUpdateManyWithWhereWithoutCustomerInput";
import { Customer_wishlistUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/Customer_wishlistUpdateWithWhereUniqueWithoutCustomerInput";
import { Customer_wishlistUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/Customer_wishlistUpsertWithWhereUniqueWithoutCustomerInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistUpdateManyWithoutCustomerNestedInput", {})
export class Customer_wishlistUpdateManyWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => [Customer_wishlistCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Customer_wishlistCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Customer_wishlistCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: Customer_wishlistUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_wishlistCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_wishlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_wishlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_wishlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_wishlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: Customer_wishlistUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: Customer_wishlistUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_wishlistScalarWhereInput[] | undefined;
}
