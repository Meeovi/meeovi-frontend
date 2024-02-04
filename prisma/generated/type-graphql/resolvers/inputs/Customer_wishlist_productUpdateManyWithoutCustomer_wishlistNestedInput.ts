import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope } from "../inputs/Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope";
import { Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput } from "../inputs/Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput";
import { Customer_wishlist_productCreateWithoutCustomer_wishlistInput } from "../inputs/Customer_wishlist_productCreateWithoutCustomer_wishlistInput";
import { Customer_wishlist_productScalarWhereInput } from "../inputs/Customer_wishlist_productScalarWhereInput";
import { Customer_wishlist_productUpdateManyWithWhereWithoutCustomer_wishlistInput } from "../inputs/Customer_wishlist_productUpdateManyWithWhereWithoutCustomer_wishlistInput";
import { Customer_wishlist_productUpdateWithWhereUniqueWithoutCustomer_wishlistInput } from "../inputs/Customer_wishlist_productUpdateWithWhereUniqueWithoutCustomer_wishlistInput";
import { Customer_wishlist_productUpsertWithWhereUniqueWithoutCustomer_wishlistInput } from "../inputs/Customer_wishlist_productUpsertWithWhereUniqueWithoutCustomer_wishlistInput";
import { Customer_wishlist_productWhereUniqueInput } from "../inputs/Customer_wishlist_productWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlist_productUpdateManyWithoutCustomer_wishlistNestedInput", {})
export class Customer_wishlist_productUpdateManyWithoutCustomer_wishlistNestedInput {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateWithoutCustomer_wishlistInput], {
    nullable: true
  })
  create?: Customer_wishlist_productCreateWithoutCustomer_wishlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput], {
    nullable: true
  })
  connectOrCreate?: Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productUpsertWithWhereUniqueWithoutCustomer_wishlistInput], {
    nullable: true
  })
  upsert?: Customer_wishlist_productUpsertWithWhereUniqueWithoutCustomer_wishlistInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_wishlist_productCreateManyCustomer_wishlistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_wishlist_productWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_wishlist_productWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_wishlist_productWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_wishlist_productWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productUpdateWithWhereUniqueWithoutCustomer_wishlistInput], {
    nullable: true
  })
  update?: Customer_wishlist_productUpdateWithWhereUniqueWithoutCustomer_wishlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productUpdateManyWithWhereWithoutCustomer_wishlistInput], {
    nullable: true
  })
  updateMany?: Customer_wishlist_productUpdateManyWithWhereWithoutCustomer_wishlistInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_wishlist_productScalarWhereInput[] | undefined;
}
