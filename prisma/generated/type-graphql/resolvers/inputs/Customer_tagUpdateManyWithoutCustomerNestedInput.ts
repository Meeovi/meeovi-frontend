import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCreateManyCustomerInputEnvelope } from "../inputs/Customer_tagCreateManyCustomerInputEnvelope";
import { Customer_tagCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_tagCreateOrConnectWithoutCustomerInput";
import { Customer_tagCreateWithoutCustomerInput } from "../inputs/Customer_tagCreateWithoutCustomerInput";
import { Customer_tagScalarWhereInput } from "../inputs/Customer_tagScalarWhereInput";
import { Customer_tagUpdateManyWithWhereWithoutCustomerInput } from "../inputs/Customer_tagUpdateManyWithWhereWithoutCustomerInput";
import { Customer_tagUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/Customer_tagUpdateWithWhereUniqueWithoutCustomerInput";
import { Customer_tagUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/Customer_tagUpsertWithWhereUniqueWithoutCustomerInput";
import { Customer_tagWhereUniqueInput } from "../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.InputType("Customer_tagUpdateManyWithoutCustomerNestedInput", {})
export class Customer_tagUpdateManyWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => [Customer_tagCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Customer_tagCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Customer_tagCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: Customer_tagUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_tagCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_tagCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: Customer_tagUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: Customer_tagUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_tagScalarWhereInput[] | undefined;
}
