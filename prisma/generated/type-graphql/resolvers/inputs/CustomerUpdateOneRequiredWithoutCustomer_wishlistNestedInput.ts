import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCustomer_wishlistInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_wishlistInput";
import { CustomerCreateWithoutCustomer_wishlistInput } from "../inputs/CustomerCreateWithoutCustomer_wishlistInput";
import { CustomerUpdateToOneWithWhereWithoutCustomer_wishlistInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutCustomer_wishlistInput";
import { CustomerUpsertWithoutCustomer_wishlistInput } from "../inputs/CustomerUpsertWithoutCustomer_wishlistInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneRequiredWithoutCustomer_wishlistNestedInput", {})
export class CustomerUpdateOneRequiredWithoutCustomer_wishlistNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_wishlistInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_wishlistInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCustomer_wishlistInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_wishlistInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutCustomer_wishlistInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutCustomer_wishlistInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutCustomer_wishlistInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutCustomer_wishlistInput | undefined;
}
