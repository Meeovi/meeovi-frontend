import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManySalutationInputEnvelope } from "../inputs/Customer_addressCreateManySalutationInputEnvelope";
import { Customer_addressCreateOrConnectWithoutSalutationInput } from "../inputs/Customer_addressCreateOrConnectWithoutSalutationInput";
import { Customer_addressCreateWithoutSalutationInput } from "../inputs/Customer_addressCreateWithoutSalutationInput";
import { Customer_addressScalarWhereInput } from "../inputs/Customer_addressScalarWhereInput";
import { Customer_addressUpdateManyWithWhereWithoutSalutationInput } from "../inputs/Customer_addressUpdateManyWithWhereWithoutSalutationInput";
import { Customer_addressUpdateWithWhereUniqueWithoutSalutationInput } from "../inputs/Customer_addressUpdateWithWhereUniqueWithoutSalutationInput";
import { Customer_addressUpsertWithWhereUniqueWithoutSalutationInput } from "../inputs/Customer_addressUpsertWithWhereUniqueWithoutSalutationInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpdateManyWithoutSalutationNestedInput", {})
export class Customer_addressUpdateManyWithoutSalutationNestedInput {
  @TypeGraphQL.Field(_type => [Customer_addressCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: Customer_addressCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: Customer_addressCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpsertWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  upsert?: Customer_addressUpsertWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_addressCreateManySalutationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Customer_addressUpdateWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  update?: Customer_addressUpdateWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressUpdateManyWithWhereWithoutSalutationInput], {
    nullable: true
  })
  updateMany?: Customer_addressUpdateManyWithWhereWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_addressScalarWhereInput[] | undefined;
}
