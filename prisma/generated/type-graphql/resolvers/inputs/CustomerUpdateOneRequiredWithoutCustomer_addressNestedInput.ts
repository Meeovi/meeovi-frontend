import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCustomer_addressInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_addressInput";
import { CustomerCreateWithoutCustomer_addressInput } from "../inputs/CustomerCreateWithoutCustomer_addressInput";
import { CustomerUpdateToOneWithWhereWithoutCustomer_addressInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutCustomer_addressInput";
import { CustomerUpsertWithoutCustomer_addressInput } from "../inputs/CustomerUpsertWithoutCustomer_addressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneRequiredWithoutCustomer_addressNestedInput", {})
export class CustomerUpdateOneRequiredWithoutCustomer_addressNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_addressInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCustomer_addressInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutCustomer_addressInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutCustomer_addressInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutCustomer_addressInput | undefined;
}
