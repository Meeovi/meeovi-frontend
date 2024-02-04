import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateManySalutationInputEnvelope } from "../inputs/Newsletter_recipientCreateManySalutationInputEnvelope";
import { Newsletter_recipientCreateOrConnectWithoutSalutationInput } from "../inputs/Newsletter_recipientCreateOrConnectWithoutSalutationInput";
import { Newsletter_recipientCreateWithoutSalutationInput } from "../inputs/Newsletter_recipientCreateWithoutSalutationInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateNestedManyWithoutSalutationInput", {})
export class Newsletter_recipientCreateNestedManyWithoutSalutationInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateWithoutSalutationInput], {
    nullable: true
  })
  create?: Newsletter_recipientCreateWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateOrConnectWithoutSalutationInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipientCreateOrConnectWithoutSalutationInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateManySalutationInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_recipientCreateManySalutationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_recipientWhereUniqueInput[] | undefined;
}
