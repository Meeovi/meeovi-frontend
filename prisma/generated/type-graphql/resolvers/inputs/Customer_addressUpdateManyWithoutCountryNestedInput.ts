import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManyCountryInputEnvelope } from "../inputs/Customer_addressCreateManyCountryInputEnvelope";
import { Customer_addressCreateOrConnectWithoutCountryInput } from "../inputs/Customer_addressCreateOrConnectWithoutCountryInput";
import { Customer_addressCreateWithoutCountryInput } from "../inputs/Customer_addressCreateWithoutCountryInput";
import { Customer_addressScalarWhereInput } from "../inputs/Customer_addressScalarWhereInput";
import { Customer_addressUpdateManyWithWhereWithoutCountryInput } from "../inputs/Customer_addressUpdateManyWithWhereWithoutCountryInput";
import { Customer_addressUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/Customer_addressUpdateWithWhereUniqueWithoutCountryInput";
import { Customer_addressUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/Customer_addressUpsertWithWhereUniqueWithoutCountryInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpdateManyWithoutCountryNestedInput", {})
export class Customer_addressUpdateManyWithoutCountryNestedInput {
  @TypeGraphQL.Field(_type => [Customer_addressCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Customer_addressCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Customer_addressCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpsertWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  upsert?: Customer_addressUpsertWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_addressCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_addressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpdateWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  update?: Customer_addressUpdateWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpdateManyWithWhereWithoutCountryInput], {
    nullable: true
  })
  updateMany?: Customer_addressUpdateManyWithWhereWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_addressScalarWhereInput[] | undefined;
}
