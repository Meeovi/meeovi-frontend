import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutOrder_customerInput } from "../inputs/CustomerCreateOrConnectWithoutOrder_customerInput";
import { CustomerCreateWithoutOrder_customerInput } from "../inputs/CustomerCreateWithoutOrder_customerInput";
import { CustomerUpdateToOneWithWhereWithoutOrder_customerInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutOrder_customerInput";
import { CustomerUpsertWithoutOrder_customerInput } from "../inputs/CustomerUpsertWithoutOrder_customerInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneWithoutOrder_customerNestedInput", {})
export class CustomerUpdateOneWithoutOrder_customerNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutOrder_customerInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutOrder_customerInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutOrder_customerInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutOrder_customerInput | undefined;

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

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutOrder_customerInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutOrder_customerInput | undefined;
}
