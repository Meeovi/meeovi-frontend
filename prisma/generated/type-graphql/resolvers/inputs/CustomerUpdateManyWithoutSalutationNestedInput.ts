import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManySalutationInputEnvelope } from "../inputs/CustomerCreateManySalutationInputEnvelope";
import { CustomerCreateOrConnectWithoutSalutationInput } from "../inputs/CustomerCreateOrConnectWithoutSalutationInput";
import { CustomerCreateWithoutSalutationInput } from "../inputs/CustomerCreateWithoutSalutationInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutSalutationInput } from "../inputs/CustomerUpdateManyWithWhereWithoutSalutationInput";
import { CustomerUpdateWithWhereUniqueWithoutSalutationInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutSalutationInput";
import { CustomerUpsertWithWhereUniqueWithoutSalutationInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutSalutationInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateManyWithoutSalutationNestedInput", {})
export class CustomerUpdateManyWithoutSalutationNestedInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManySalutationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutSalutationInput], {
    nullable: true
  })
  update?: CustomerUpdateWithWhereUniqueWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutSalutationInput], {
    nullable: true
  })
  updateMany?: CustomerUpdateManyWithWhereWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerScalarWhereInput[] | undefined;
}
