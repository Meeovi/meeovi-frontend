import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyCustomer_groupInputEnvelope } from "../inputs/CustomerCreateManyCustomer_groupInputEnvelope";
import { CustomerCreateOrConnectWithoutCustomer_groupInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_groupInput";
import { CustomerCreateWithoutCustomer_groupInput } from "../inputs/CustomerCreateWithoutCustomer_groupInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutCustomer_groupInput } from "../inputs/CustomerUpdateManyWithWhereWithoutCustomer_groupInput";
import { CustomerUpdateWithWhereUniqueWithoutCustomer_groupInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutCustomer_groupInput";
import { CustomerUpsertWithWhereUniqueWithoutCustomer_groupInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutCustomer_groupInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateManyWithoutCustomer_groupNestedInput", {})
export class CustomerUpdateManyWithoutCustomer_groupNestedInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutCustomer_groupInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutCustomer_groupInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutCustomer_groupInput], {
    nullable: true
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyCustomer_groupInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyCustomer_groupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  set?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  delete?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutCustomer_groupInput], {
    nullable: true
  })
  update?: CustomerUpdateWithWhereUniqueWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutCustomer_groupInput], {
    nullable: true
  })
  updateMany?: CustomerUpdateManyWithWhereWithoutCustomer_groupInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerScalarWhereInput[] | undefined;
}
