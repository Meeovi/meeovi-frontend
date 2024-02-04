import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutProduct_reviewInput } from "../inputs/CustomerCreateOrConnectWithoutProduct_reviewInput";
import { CustomerCreateWithoutProduct_reviewInput } from "../inputs/CustomerCreateWithoutProduct_reviewInput";
import { CustomerUpdateToOneWithWhereWithoutProduct_reviewInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutProduct_reviewInput";
import { CustomerUpsertWithoutProduct_reviewInput } from "../inputs/CustomerUpsertWithoutProduct_reviewInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneWithoutProduct_reviewNestedInput", {})
export class CustomerUpdateOneWithoutProduct_reviewNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutProduct_reviewInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutProduct_reviewInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutProduct_reviewInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  disconnect?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  delete?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutProduct_reviewInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutProduct_reviewInput | undefined;
}
