import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateOrConnectWithoutOrder_addressInput } from "../inputs/Country_stateCreateOrConnectWithoutOrder_addressInput";
import { Country_stateCreateWithoutOrder_addressInput } from "../inputs/Country_stateCreateWithoutOrder_addressInput";
import { Country_stateUpdateToOneWithWhereWithoutOrder_addressInput } from "../inputs/Country_stateUpdateToOneWithWhereWithoutOrder_addressInput";
import { Country_stateUpsertWithoutOrder_addressInput } from "../inputs/Country_stateUpsertWithoutOrder_addressInput";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateUpdateOneWithoutOrder_addressNestedInput", {})
export class Country_stateUpdateOneWithoutOrder_addressNestedInput {
  @TypeGraphQL.Field(_type => Country_stateCreateWithoutOrder_addressInput, {
    nullable: true
  })
  create?: Country_stateCreateWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateCreateOrConnectWithoutOrder_addressInput, {
    nullable: true
  })
  connectOrCreate?: Country_stateCreateOrConnectWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateUpsertWithoutOrder_addressInput, {
    nullable: true
  })
  upsert?: Country_stateUpsertWithoutOrder_addressInput | undefined;

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

  @TypeGraphQL.Field(_type => Country_stateUpdateToOneWithWhereWithoutOrder_addressInput, {
    nullable: true
  })
  update?: Country_stateUpdateToOneWithWhereWithoutOrder_addressInput | undefined;
}
