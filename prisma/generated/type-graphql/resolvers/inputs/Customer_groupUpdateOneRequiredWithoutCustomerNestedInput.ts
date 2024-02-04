import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_groupCreateOrConnectWithoutCustomerInput";
import { Customer_groupCreateWithoutCustomerInput } from "../inputs/Customer_groupCreateWithoutCustomerInput";
import { Customer_groupUpdateToOneWithWhereWithoutCustomerInput } from "../inputs/Customer_groupUpdateToOneWithWhereWithoutCustomerInput";
import { Customer_groupUpsertWithoutCustomerInput } from "../inputs/Customer_groupUpsertWithoutCustomerInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupUpdateOneRequiredWithoutCustomerNestedInput", {})
export class Customer_groupUpdateOneRequiredWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: Customer_groupCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: Customer_groupCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpsertWithoutCustomerInput, {
    nullable: true
  })
  upsert?: Customer_groupUpsertWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_groupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateToOneWithWhereWithoutCustomerInput, {
    nullable: true
  })
  update?: Customer_groupUpdateToOneWithWhereWithoutCustomerInput | undefined;
}
