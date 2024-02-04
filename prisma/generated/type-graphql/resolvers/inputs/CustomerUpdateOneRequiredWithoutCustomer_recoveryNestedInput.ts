import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCustomer_recoveryInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_recoveryInput";
import { CustomerCreateWithoutCustomer_recoveryInput } from "../inputs/CustomerCreateWithoutCustomer_recoveryInput";
import { CustomerUpdateToOneWithWhereWithoutCustomer_recoveryInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutCustomer_recoveryInput";
import { CustomerUpsertWithoutCustomer_recoveryInput } from "../inputs/CustomerUpsertWithoutCustomer_recoveryInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneRequiredWithoutCustomer_recoveryNestedInput", {})
export class CustomerUpdateOneRequiredWithoutCustomer_recoveryNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_recoveryInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_recoveryInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCustomer_recoveryInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_recoveryInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutCustomer_recoveryInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutCustomer_recoveryInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutCustomer_recoveryInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutCustomer_recoveryInput | undefined;
}
