import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCustomer_tagInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_tagInput";
import { CustomerCreateWithoutCustomer_tagInput } from "../inputs/CustomerCreateWithoutCustomer_tagInput";
import { CustomerUpdateToOneWithWhereWithoutCustomer_tagInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutCustomer_tagInput";
import { CustomerUpsertWithoutCustomer_tagInput } from "../inputs/CustomerUpsertWithoutCustomer_tagInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput", {})
export class CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_tagInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_tagInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCustomer_tagInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_tagInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutCustomer_tagInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutCustomer_tagInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutCustomer_tagInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutCustomer_tagInput | undefined;
}
