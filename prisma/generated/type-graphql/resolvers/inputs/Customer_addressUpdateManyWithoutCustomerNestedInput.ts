import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManyCustomerInputEnvelope } from "../inputs/Customer_addressCreateManyCustomerInputEnvelope";
import { Customer_addressCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_addressCreateOrConnectWithoutCustomerInput";
import { Customer_addressCreateWithoutCustomerInput } from "../inputs/Customer_addressCreateWithoutCustomerInput";
import { Customer_addressScalarWhereInput } from "../inputs/Customer_addressScalarWhereInput";
import { Customer_addressUpdateManyWithWhereWithoutCustomerInput } from "../inputs/Customer_addressUpdateManyWithWhereWithoutCustomerInput";
import { Customer_addressUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/Customer_addressUpdateWithWhereUniqueWithoutCustomerInput";
import { Customer_addressUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/Customer_addressUpsertWithWhereUniqueWithoutCustomerInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpdateManyWithoutCustomerNestedInput", {})
export class Customer_addressUpdateManyWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => [Customer_addressCreateWithoutCustomerInput], {
    nullable: true
  })
  create?: Customer_addressCreateWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressCreateOrConnectWithoutCustomerInput], {
    nullable: true
  })
  connectOrCreate?: Customer_addressCreateOrConnectWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpsertWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  upsert?: Customer_addressUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressCreateManyCustomerInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_addressCreateManyCustomerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpdateWithWhereUniqueWithoutCustomerInput], {
    nullable: true
  })
  update?: Customer_addressUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpdateManyWithWhereWithoutCustomerInput], {
    nullable: true
  })
  updateMany?: Customer_addressUpdateManyWithWhereWithoutCustomerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_addressScalarWhereInput[] | undefined;
}
