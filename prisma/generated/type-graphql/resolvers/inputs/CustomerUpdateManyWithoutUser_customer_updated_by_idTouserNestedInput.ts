import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyUser_customer_updated_by_idTouserInputEnvelope } from "../inputs/CustomerCreateManyUser_customer_updated_by_idTouserInputEnvelope";
import { CustomerCreateOrConnectWithoutUser_customer_updated_by_idTouserInput } from "../inputs/CustomerCreateOrConnectWithoutUser_customer_updated_by_idTouserInput";
import { CustomerCreateWithoutUser_customer_updated_by_idTouserInput } from "../inputs/CustomerCreateWithoutUser_customer_updated_by_idTouserInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutUser_customer_updated_by_idTouserInput } from "../inputs/CustomerUpdateManyWithWhereWithoutUser_customer_updated_by_idTouserInput";
import { CustomerUpdateWithWhereUniqueWithoutUser_customer_updated_by_idTouserInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutUser_customer_updated_by_idTouserInput";
import { CustomerUpsertWithWhereUniqueWithoutUser_customer_updated_by_idTouserInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutUser_customer_updated_by_idTouserInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateManyWithoutUser_customer_updated_by_idTouserNestedInput", {})
export class CustomerUpdateManyWithoutUser_customer_updated_by_idTouserNestedInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutUser_customer_updated_by_idTouserInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutUser_customer_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutUser_customer_updated_by_idTouserInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutUser_customer_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutUser_customer_updated_by_idTouserInput], {
    nullable: true
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutUser_customer_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyUser_customer_updated_by_idTouserInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyUser_customer_updated_by_idTouserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  set?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  delete?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutUser_customer_updated_by_idTouserInput], {
    nullable: true
  })
  update?: CustomerUpdateWithWhereUniqueWithoutUser_customer_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutUser_customer_updated_by_idTouserInput], {
    nullable: true
  })
  updateMany?: CustomerUpdateManyWithWhereWithoutUser_customer_updated_by_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerScalarWhereInput[] | undefined;
}
