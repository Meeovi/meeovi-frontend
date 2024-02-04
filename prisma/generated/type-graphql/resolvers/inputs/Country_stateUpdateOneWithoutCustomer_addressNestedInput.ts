import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateOrConnectWithoutCustomer_addressInput } from "../inputs/Country_stateCreateOrConnectWithoutCustomer_addressInput";
import { Country_stateCreateWithoutCustomer_addressInput } from "../inputs/Country_stateCreateWithoutCustomer_addressInput";
import { Country_stateUpdateToOneWithWhereWithoutCustomer_addressInput } from "../inputs/Country_stateUpdateToOneWithWhereWithoutCustomer_addressInput";
import { Country_stateUpsertWithoutCustomer_addressInput } from "../inputs/Country_stateUpsertWithoutCustomer_addressInput";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateUpdateOneWithoutCustomer_addressNestedInput", {})
export class Country_stateUpdateOneWithoutCustomer_addressNestedInput {
  @TypeGraphQL.Field(_type => Country_stateCreateWithoutCustomer_addressInput, {
    nullable: true
  })
  create?: Country_stateCreateWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateCreateOrConnectWithoutCustomer_addressInput, {
    nullable: true
  })
  connectOrCreate?: Country_stateCreateOrConnectWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateUpsertWithoutCustomer_addressInput, {
    nullable: true
  })
  upsert?: Country_stateUpsertWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  disconnect?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  delete?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: true
  })
  connect?: Country_stateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateUpdateToOneWithWhereWithoutCustomer_addressInput, {
    nullable: true
  })
  update?: Country_stateUpdateToOneWithWhereWithoutCustomer_addressInput | undefined;
}
