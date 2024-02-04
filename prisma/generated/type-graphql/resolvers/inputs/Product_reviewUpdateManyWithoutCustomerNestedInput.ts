import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManyCustomerInputEnvelope } from "../inputs/Product_reviewCreateManyCustomerInputEnvelope";
import { Product_reviewCreateOrConnectWithoutCustomerInput } from "../inputs/Product_reviewCreateOrConnectWithoutCustomerInput";
import { Product_reviewCreateWithoutCustomerInput } from "../inputs/Product_reviewCreateWithoutCustomerInput";
import { Product_reviewScalarWhereInput } from "../inputs/Product_reviewScalarWhereInput";
import { Product_reviewUpdateManyWithWhereWithoutCustomerInput } from "../inputs/Product_reviewUpdateManyWithWhereWithoutCustomerInput";
import { Product_reviewUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/Product_reviewUpdateWithWhereUniqueWithoutCustomerInput";
import { Product_reviewUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/Product_reviewUpsertWithWhereUniqueWithoutCustomerInput";
import { Product_reviewWhereUniqueInput } from "../inputs/Product_reviewWhereUniqueInput";

@TypeGraphQL.InputType("Product_reviewUpdateManyWithoutCustomerNestedInput", {})
export class Product_reviewUpdateManyWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => [Product_reviewCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Product_reviewCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Product_reviewCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: Product_reviewUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Product_reviewCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  set?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_reviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: Product_reviewUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: Product_reviewUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_reviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_reviewScalarWhereInput[] | undefined;
}
