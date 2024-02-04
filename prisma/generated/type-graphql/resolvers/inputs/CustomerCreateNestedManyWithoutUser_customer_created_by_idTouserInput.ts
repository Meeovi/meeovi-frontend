import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyUser_customer_created_by_idTouserInputEnvelope } from "../inputs/CustomerCreateManyUser_customer_created_by_idTouserInputEnvelope";
import { CustomerCreateOrConnectWithoutUser_customer_created_by_idTouserInput } from "../inputs/CustomerCreateOrConnectWithoutUser_customer_created_by_idTouserInput";
import { CustomerCreateWithoutUser_customer_created_by_idTouserInput } from "../inputs/CustomerCreateWithoutUser_customer_created_by_idTouserInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedManyWithoutUser_customer_created_by_idTouserInput", {})
export class CustomerCreateNestedManyWithoutUser_customer_created_by_idTouserInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutUser_customer_created_by_idTouserInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutUser_customer_created_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutUser_customer_created_by_idTouserInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutUser_customer_created_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyUser_customer_created_by_idTouserInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyUser_customer_created_by_idTouserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;
}
