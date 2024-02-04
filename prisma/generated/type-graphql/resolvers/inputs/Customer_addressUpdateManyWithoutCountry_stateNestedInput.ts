import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManyCountry_stateInputEnvelope } from "../inputs/Customer_addressCreateManyCountry_stateInputEnvelope";
import { Customer_addressCreateOrConnectWithoutCountry_stateInput } from "../inputs/Customer_addressCreateOrConnectWithoutCountry_stateInput";
import { Customer_addressCreateWithoutCountry_stateInput } from "../inputs/Customer_addressCreateWithoutCountry_stateInput";
import { Customer_addressScalarWhereInput } from "../inputs/Customer_addressScalarWhereInput";
import { Customer_addressUpdateManyWithWhereWithoutCountry_stateInput } from "../inputs/Customer_addressUpdateManyWithWhereWithoutCountry_stateInput";
import { Customer_addressUpdateWithWhereUniqueWithoutCountry_stateInput } from "../inputs/Customer_addressUpdateWithWhereUniqueWithoutCountry_stateInput";
import { Customer_addressUpsertWithWhereUniqueWithoutCountry_stateInput } from "../inputs/Customer_addressUpsertWithWhereUniqueWithoutCountry_stateInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpdateManyWithoutCountry_stateNestedInput", {})
export class Customer_addressUpdateManyWithoutCountry_stateNestedInput {
  @TypeGraphQL.Field(_type => [Customer_addressCreateWithoutCountry_stateInput], {
    nullable: true
  })
  create?: Customer_addressCreateWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressCreateOrConnectWithoutCountry_stateInput], {
    nullable: true
  })
  connectOrCreate?: Customer_addressCreateOrConnectWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpsertWithWhereUniqueWithoutCountry_stateInput], {
    nullable: true
  })
  upsert?: Customer_addressUpsertWithWhereUniqueWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressCreateManyCountry_stateInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_addressCreateManyCountry_stateInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Customer_addressUpdateWithWhereUniqueWithoutCountry_stateInput], {
    nullable: true
  })
  update?: Customer_addressUpdateWithWhereUniqueWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpdateManyWithWhereWithoutCountry_stateInput], {
    nullable: true
  })
  updateMany?: Customer_addressUpdateManyWithWhereWithoutCountry_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_addressScalarWhereInput[] | undefined;
}
