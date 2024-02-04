import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCartInput } from "../inputs/CustomerCreateOrConnectWithoutCartInput";
import { CustomerCreateWithoutCartInput } from "../inputs/CustomerCreateWithoutCartInput";
import { CustomerUpdateToOneWithWhereWithoutCartInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutCartInput";
import { CustomerUpsertWithoutCartInput } from "../inputs/CustomerUpsertWithoutCartInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneWithoutCartNestedInput", {})
export class CustomerUpdateOneWithoutCartNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCartInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCartInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCartInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutCartInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutCartInput | undefined;

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

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutCartInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutCartInput | undefined;
}
