import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutTax_providerInput } from "../inputs/AppCreateOrConnectWithoutTax_providerInput";
import { AppCreateWithoutTax_providerInput } from "../inputs/AppCreateWithoutTax_providerInput";
import { AppUpdateToOneWithWhereWithoutTax_providerInput } from "../inputs/AppUpdateToOneWithWhereWithoutTax_providerInput";
import { AppUpsertWithoutTax_providerInput } from "../inputs/AppUpsertWithoutTax_providerInput";
import { AppWhereInput } from "../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneWithoutTax_providerNestedInput", {})
export class AppUpdateOneWithoutTax_providerNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutTax_providerInput, {
    nullable: true
  })
  create?: AppCreateWithoutTax_providerInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutTax_providerInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutTax_providerInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutTax_providerInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutTax_providerInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  disconnect?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  delete?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutTax_providerInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutTax_providerInput | undefined;
}
