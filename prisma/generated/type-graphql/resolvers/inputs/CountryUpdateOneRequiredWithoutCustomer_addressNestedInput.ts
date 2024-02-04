import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCustomer_addressInput } from "../inputs/CountryCreateOrConnectWithoutCustomer_addressInput";
import { CountryCreateWithoutCustomer_addressInput } from "../inputs/CountryCreateWithoutCustomer_addressInput";
import { CountryUpdateToOneWithWhereWithoutCustomer_addressInput } from "../inputs/CountryUpdateToOneWithWhereWithoutCustomer_addressInput";
import { CountryUpsertWithoutCustomer_addressInput } from "../inputs/CountryUpsertWithoutCustomer_addressInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutCustomer_addressNestedInput", {})
export class CountryUpdateOneRequiredWithoutCustomer_addressNestedInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCustomer_addressInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCustomer_addressInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutCustomer_addressInput, {
    nullable: true
  })
  upsert?: CountryUpsertWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateToOneWithWhereWithoutCustomer_addressInput, {
    nullable: true
  })
  update?: CountryUpdateToOneWithWhereWithoutCustomer_addressInput | undefined;
}
