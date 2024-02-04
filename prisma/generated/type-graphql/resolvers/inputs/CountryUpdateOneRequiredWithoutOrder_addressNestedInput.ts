import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutOrder_addressInput } from "../inputs/CountryCreateOrConnectWithoutOrder_addressInput";
import { CountryCreateWithoutOrder_addressInput } from "../inputs/CountryCreateWithoutOrder_addressInput";
import { CountryUpdateToOneWithWhereWithoutOrder_addressInput } from "../inputs/CountryUpdateToOneWithWhereWithoutOrder_addressInput";
import { CountryUpsertWithoutOrder_addressInput } from "../inputs/CountryUpsertWithoutOrder_addressInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutOrder_addressNestedInput", {})
export class CountryUpdateOneRequiredWithoutOrder_addressNestedInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutOrder_addressInput, {
    nullable: true
  })
  create?: CountryCreateWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutOrder_addressInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutOrder_addressInput, {
    nullable: true
  })
  upsert?: CountryUpsertWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateToOneWithWhereWithoutOrder_addressInput, {
    nullable: true
  })
  update?: CountryUpdateToOneWithWhereWithoutOrder_addressInput | undefined;
}
