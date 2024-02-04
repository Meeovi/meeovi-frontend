import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateOrConnectWithoutCustomer_group_translationInput } from "../inputs/Customer_groupCreateOrConnectWithoutCustomer_group_translationInput";
import { Customer_groupCreateWithoutCustomer_group_translationInput } from "../inputs/Customer_groupCreateWithoutCustomer_group_translationInput";
import { Customer_groupUpdateToOneWithWhereWithoutCustomer_group_translationInput } from "../inputs/Customer_groupUpdateToOneWithWhereWithoutCustomer_group_translationInput";
import { Customer_groupUpsertWithoutCustomer_group_translationInput } from "../inputs/Customer_groupUpsertWithoutCustomer_group_translationInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupUpdateOneRequiredWithoutCustomer_group_translationNestedInput", {})
export class Customer_groupUpdateOneRequiredWithoutCustomer_group_translationNestedInput {
  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutCustomer_group_translationInput, {
    nullable: true
  })
  create?: Customer_groupCreateWithoutCustomer_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCreateOrConnectWithoutCustomer_group_translationInput, {
    nullable: true
  })
  connectOrCreate?: Customer_groupCreateOrConnectWithoutCustomer_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpsertWithoutCustomer_group_translationInput, {
    nullable: true
  })
  upsert?: Customer_groupUpsertWithoutCustomer_group_translationInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_groupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateToOneWithWhereWithoutCustomer_group_translationInput, {
    nullable: true
  })
  update?: Customer_groupUpdateToOneWithWhereWithoutCustomer_group_translationInput | undefined;
}
