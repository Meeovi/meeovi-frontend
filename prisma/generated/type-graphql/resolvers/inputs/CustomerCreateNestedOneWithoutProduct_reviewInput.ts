import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutProduct_reviewInput } from "../inputs/CustomerCreateOrConnectWithoutProduct_reviewInput";
import { CustomerCreateWithoutProduct_reviewInput } from "../inputs/CustomerCreateWithoutProduct_reviewInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutProduct_reviewInput", {})
export class CustomerCreateNestedOneWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutProduct_reviewInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutProduct_reviewInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutProduct_reviewInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
